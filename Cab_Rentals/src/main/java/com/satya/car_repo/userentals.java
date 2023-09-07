package com.satya.car_repo;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.satya.entity.Carrentals_entity;
import com.satya.entity.userrental;
@Repository
public interface userentals extends CrudRepository<userrental, Integer> {

}
