package io.francisco.dudademo.controller;

import io.francisco.dudademo.model.Note;
import io.francisco.dudademo.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping("/create")
    public Note create(@RequestBody final Note toCreate) {
        final Note note =
                new Note("n_" + UUID.randomUUID(), toCreate.getTitle(), toCreate.getContent());

        noteRepository.save(note);
        return note;
    }

    @GetMapping("/")
    public Iterable<Note> list() {
        return noteRepository.findAll();
    }
}
