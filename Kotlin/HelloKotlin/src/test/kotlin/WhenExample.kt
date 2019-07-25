import org.junit.Test

class Sample(val name: String, val name2: String, val age: Int) {

    init {
        println("name $name name2 $name2, age $age")
    }

    constructor(name: String, name2: String) : this(name, name2,0)
    constructor(name: String) : this(name, "")

    private fun aaa() {
        println("name $name name2 $name2, age $age")
    }
}

/*
class Sample(val name: String) {

    private var name2: String = ""
    init {
        println("name $name name2 $name2")
    }

    constructor(name: String, name2: String) : this(name){
        println("name $name name $name2")
        this.name2 = name2
    }
}
*/

class Example {
    @Test
    fun test(){
        /*
        out("AAAA")
        out(0.1)
        */
        Sample("a","b")
        //Sample(name="a",age=3)
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