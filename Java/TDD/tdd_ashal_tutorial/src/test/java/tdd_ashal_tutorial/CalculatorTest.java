package tdd_ashal_tutorial;

//1 + 2 = 3
//Calculator
// - plus(x, y)
// - minus(x, y)
// - multiply(x, y)
// - divide(x, y)
//lhs, rhs
//lhs operator rhs
// lhs = rhs


//TDD
//1. RED
//2. Green -> 3
//3. Refactoring -> 1+ 2 -> x + y => Clean Code
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.is;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() throws Exception {
        calculator = new Calculator();
    }

    @Test
    public void plus(){
        assertThat(calculator.plus(1,2), is(3));
    }

    @Test
    public void minus(){
        assertThat(calculator.minus(5,3), is(2));
    }
}
