import org.junit.Test

class Sample(val name: String) {
    init {
        println("name $name")
    }

    constructor(name: String, name2: String) : this(name){
        println("name $name name $name2")
    }
}
class Example {
    @Test
    fun test(){
        out("AAAA")
        out(0.1)
    }

    private fun out(an: Any?){
        if(an is Int){
            print(an)
        } else if (an is String){
            print(an.length)
        } else if(an is Double){
            print(an)
        } else {
            println("out")
        }

        /*
        when (an) {
            is Int -> print(an)
            is String -> print(an.length)
            is Double -> print(an)
            else -> println("out")
        }
         */
    }
}