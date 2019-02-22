package com.pessoas.backend.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="PESSOAS")
public class Pessoa implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(unique = true, nullable = false, length = 11)
    private String cpf;

    @Column(length = 128, nullable = false)
    private String nome;

    @Column(length = 14)
    private String telefone;

    private Escolaridade escolaridade;

    public Pessoa() {}

    public Pessoa (String nome, String cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    public Pessoa(String nome, String telefone, String cpf, Escolaridade escolaridade) {
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.escolaridade = escolaridade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Escolaridade getEscolaridade() {
        return escolaridade;
    }

    public void setEscolaridade(Escolaridade escolaridade) {
        this.escolaridade = escolaridade;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
