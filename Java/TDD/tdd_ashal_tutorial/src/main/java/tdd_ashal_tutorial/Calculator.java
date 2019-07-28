package tdd_ashal_tutorial;

public class Calculator {
    public Object plus(int x, int y) {
        if (y==0) {
            return x;
        }
        return plus(x+1, y-1); // return (x+1)+1
    }

    public Object minus(int x, int y) {
        if (y==0) {
            return x;
        }
        return minus(x-1, y-1);
    }

    public int fib(int x) {
        if(x<=0)
            return 0;
        if(x == 1|| x == 2){
            return 1;
        }
        return fib(x-2)+fib(x-1);
    }
}
