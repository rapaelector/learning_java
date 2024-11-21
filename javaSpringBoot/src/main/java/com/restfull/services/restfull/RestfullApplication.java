package com.restfull.services.restfull;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
public class RestfullApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestfullApplication.class, args);

		var appointment = LocalDateTime.of(2019, 8, 9, 12, 0, 0);
	}

	public boolean isAfternoonAppointment(LocalDateTime appointmentDate) {
		int compare = Integer.parseInt(appointmentDate.format(DateTimeFormatter.ofPattern("HHmmss")));

		return 120000 <= compare && compare <= 180000;
	}

}
