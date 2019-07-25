package myspring.di.xml.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

import myspring.di.xml.Hello;
import myspring.di.xml.Printer;

public class HelloBeanTest {

	public static void main(String[] args) {
		//1. IoC 컨테이너 생성
		ApplicationContext context = new GenericXmlApplicationContext("config/beans.xml");
		//2. Hello Bean 가져오기
		Hello hello = (Hello)context.getBean("hello");
		System.out.println(hello.sayHello());
		hello.print();
		//3. StringPrinter Bean 가져오기
		Printer printer = context.getBean("printer",Printer.class);
		System.out.println(printer.toString());
		
		//is Singleton?
		
		Hello hello2 = context.getBean("hello",Hello.class);
		System.out.println(hello == hello2);
	}

}
