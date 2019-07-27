package myspring.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import myspring.di.xml.Hello;

@Controller
public class HelloController {
	@Autowired
	Hello helloBean;
	
	@RequestMapping("/hello.do")
	public String hello(Model model) {
		String msg = helloBean.sayHello();
		model.addAttribute("greet", msg);
		return "hello";
	}
}
