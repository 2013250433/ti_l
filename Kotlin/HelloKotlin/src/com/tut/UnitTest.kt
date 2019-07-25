package com.tut

class WhenExample {

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