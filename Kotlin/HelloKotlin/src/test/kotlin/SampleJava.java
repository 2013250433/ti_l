public class SampleJava {
    interface A {
        default void init() {
            System.out.println("A init");
        }
    }

    abstract class B {
        final void init() {

        }
    }
}
