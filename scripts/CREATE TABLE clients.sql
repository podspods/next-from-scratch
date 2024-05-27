CREATE TABLE clients (
    id number PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    telephone VARCHAR(20),
    adresse TEXT
);
