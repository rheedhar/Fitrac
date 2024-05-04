CREATE TABLE users (
    user_id VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255)  NOT NULL,
    gender gender_type NOT NULL,
    date_of_birth DATE NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    account_status account_status_type NOT NULL,
    weight NUMERIC(5, 2) NOT NULL,
    weight_unit weight_unit_type NOT NULL,
    height NUMERIC(5, 2) NOT NULL,
    height_unit height_unit_type NOT NULL,
    bmr NUMERIC(5, 2) NOT NULL
);