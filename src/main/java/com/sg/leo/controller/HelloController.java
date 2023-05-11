package com.sg.leo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
	@GetMapping("/jsp")
	public String jsp(Model model) {
		System.out.println("JSP 파일이 요청됨 hellocontroller");
		model.addAttribute("username", "스프링을 처음시작합니다");
		return "hellojsp";
	}
}
