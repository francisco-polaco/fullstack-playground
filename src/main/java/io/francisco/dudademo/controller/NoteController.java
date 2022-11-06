package io.francisco.dudademo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteController {
    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
