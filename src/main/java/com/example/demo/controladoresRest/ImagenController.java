package com.example.demo.controladoresRest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.ReclamoException;
import com.example.demo.views.ImagenView;

@RestController
@RequestMapping("/imagenes")
public class ImagenController {

	@Autowired
	Controlador controlador;

	@GetMapping("/buscarImagenesPorNumeroReclamo/{id}")
	public List<ImagenView> buscarImagenesPorNumeroReclamo(@PathVariable int id) throws ReclamoException {
		return controlador.buscarImagenesPorNumeroReclamo(id);
	}

	@GetMapping("/buscarUrlPorReclamo/{id}")
	public List<String> buscarUrlPorReclamo(@PathVariable int id) {
		return controlador.buscarUrlPorReclamo(id);
	}

}
