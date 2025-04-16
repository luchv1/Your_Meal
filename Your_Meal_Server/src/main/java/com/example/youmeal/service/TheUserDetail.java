package com.example.youmeal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.youmeal.model.UserPrincipal;
import com.example.youmeal.model.Users;
import com.example.youmeal.repo.UserRepo;

@Service
public class TheUserDetail implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    public TheUserDetail(UserRepo userRepo) {
        this.repo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = repo.findByUsername(username);

        if (user == null) {
            System.out.println("user not found");
            throw new UsernameNotFoundException(username);
        }

        return new UserPrincipal(user);
    }
}
