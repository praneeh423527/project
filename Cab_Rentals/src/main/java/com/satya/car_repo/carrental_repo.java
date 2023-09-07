package com.satya.car_repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.satya.entity.Carrentals_entity;

@Repository
public interface carrental_repo  extends CrudRepository<Carrentals_entity, Integer>  {

}
