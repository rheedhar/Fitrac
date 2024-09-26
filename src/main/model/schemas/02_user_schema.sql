/**
 * Create users table schema
 */

CREATE TABLE users (
    user_id VARCHAR(128) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100)  NOT NULL,
    gender gender_type NOT NULL,
    date_of_birth DATE NOT NULL,
    email_address VARCHAR(255) UNIQUE NOT NULL,
    account_status account_status_type NOT NULL,
    weight NUMERIC(5, 2) NOT NULL,
    weight_unit weight_unit_type NOT NULL,
    height NUMERIC(5, 2) NOT NULL,
    height_unit height_unit_type NOT NULL,
    bmr NUMERIC(7, 2) NOT NULL,
    profile_image_url VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);


/**
 * Trigger to call function before each update
 */
 CREATE TRIGGER update_users_updated_at
 BEFORE UPDATE ON users
 FOR EACH ROW EXECUTE FUNCTION update_updated_at();



