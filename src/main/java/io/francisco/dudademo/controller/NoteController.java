package io.francisco.dudademo.controller;

import io.francisco.dudademo.model.Note;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class NoteController {

    private final List<Note> db = new ArrayList<>();

    @PostMapping("/create")
    public Note create(@RequestBody final Note toCreate) {
        db.add(toCreate);
        return toCreate;
    }

    @GetMapping("/")
    public List<Note> list() {
        return db;
    }
}
