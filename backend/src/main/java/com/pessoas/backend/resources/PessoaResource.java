package com.pessoas.backend.resources;

import com.pessoas.backend.models.Pessoa;
import com.pessoas.backend.repositories.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class PessoaResource {

    @Autowired
    PessoaRepository pessoaRepository;

    @GetMapping("/pessoas")
    public List<Pessoa> getList() {
        //TODO filter by name
        return pessoaRepository.findAll();
    }

    @GetMapping("/pessoas/{id}")
    public Pessoa getPessoa(@PathVariable(value = "id") long id) {
        return pessoaRepository.findById(id);
    }

    @PostMapping("/pessoas")
    public Pessoa addPessoa(@RequestBody Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    @DeleteMapping("/pessoas/{id}")
    public void deletePessoa(@PathVariable(value = "id") long id) {
        pessoaRepository.deleteById(id);
    }

    @PutMapping("/pessoas")
    public Pessoa updatePessoa(@RequestBody Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

}
