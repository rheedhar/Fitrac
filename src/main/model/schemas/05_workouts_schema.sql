/**
 * Create workouts table schema
 */

 CREATE TABLE workouts (
    workout_id SERIAL PRIMARY KEY,
    user_id VARCHAR(128) REFERENCES users(user_id),
    goal_id INTEGER REFERENCES goals(goal_id), 
    type_id INTEGER REFERENCES workout_types(type_id), 
    date_time TIMESTAMPTZ NOT NULL,
    duration INTERVAL NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
 );

 CREATE TRIGGER update_workouts_updated_at
 BEFORE UPDATE ON workouts
 FOR EACH ROW EXECUTE FUNCTION update_updated_at();
