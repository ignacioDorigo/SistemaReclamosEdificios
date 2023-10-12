package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Imagen;

public interface ImagenRepository extends JpaRepository<Imagen, Integer> {

}
