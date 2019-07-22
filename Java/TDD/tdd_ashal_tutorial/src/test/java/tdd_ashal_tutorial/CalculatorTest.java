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

import org.junit.Test;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.is;

public class CalculatorTest {

    @Test
    public void plus(){
        Calculator calculator = new Calculator();
        assertThat(calculator.plus(1,2), is(3));
    }
}
