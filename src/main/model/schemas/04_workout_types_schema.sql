/**
 * Create workout types table schema
 */

 CREATE TABLE workout_types (
    type_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    category goal_category_type NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
 );

CREATE TRIGGER update_workout_types_updated_at
 BEFORE UPDATE ON workout_types
 FOR EACH ROW EXECUTE FUNCTION update_updated_at();