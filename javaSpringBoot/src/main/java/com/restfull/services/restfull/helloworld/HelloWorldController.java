package com.restfull.services.restfull.helloworld;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping()
public class HelloWorldController {

    @GetMapping(value = "/hello-world")
    public String helloWorld() {
        return "Hello World!";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
//        throw  new RuntimeException("Error was happened");
        return new HelloWorldBean("Hello World");
    }

    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World %s", name));
    }
}
