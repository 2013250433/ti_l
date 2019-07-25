package myspring.di.xml.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertSame;

import java.util.List;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

import myspring.di.xml.Hello;
import myspring.di.xml.Printer;

public class HelloBeanJunitSpringTest {
	ApplicationContext context;
	
	@Before
	public void init() {
		//1. IoC 컨테이너 생성
		context = new GenericXmlApplicationContext("config/beans.xml");
				
	}
	
	@Test @Ignore
	public void test2() {
		Hello hello = (Hello)context.getBean("hello");
		Hello hello2 = (Hello)context.getBean("hello");
		assertSame(hello, hello2);
	}
	//Singleton 으로 관리하고 있다.
	
	@Test 
	public void test1() {
		//2. Hello Bean 가져오기
		Hello hello = (Hello)context.getBean("hello2");
		
		assertEquals("Hello Spring",hello.sayHello());
		hello.print();
		//3. StringPrinter Bean 가져오기
		Printer printer = context.getBean("printer",Printer.class);
		System.out.println(printer.toString());
		
		assertEquals(3,hello.getNames().size());
		List<String> list = hello.getNames();
		for (String value : list) {
			System.out.println(value);
		}
		
		Hello hello2 = context.getBean("hello",Hello.class);
		assertEquals("Hello Spring",printer.toString());
	}

}
