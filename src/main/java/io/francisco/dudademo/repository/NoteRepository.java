package io.francisco.dudademo.repository;

import io.francisco.dudademo.model.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, String> {

}
