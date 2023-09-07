package com.personal.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.personal.entity.FareEstimation;
import com.personal.entity.Helpservice;

public interface helpservicerepo extends CrudRepository<Helpservice, Integer>{
	List<Helpservice> findBybookingid(Integer bookingid);
	
}
