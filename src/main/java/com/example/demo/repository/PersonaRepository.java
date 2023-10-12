package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Persona;

public interface PersonaRepository extends JpaRepository<Persona, String>{

}