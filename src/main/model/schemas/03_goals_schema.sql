/**
 * Create goals table schema
 */

 CREATE TABLE goals (
    goal_id SERIAL PRIMARY KEY,
    user_id VARCHAR(128) REFERENCES users(user_id),
    goal_category goal_category_type NOT NULL,
    description TEXT,
    target_date DATE NOT NULL,
    target_value NUMERIC(5, 2),
    status goal_status_type NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
 );

 CREATE TRIGGER update_goals_updated_at
 BEFORE UPDATE ON goals
 FOR EACH ROW EXECUTE FUNCTION update_updated_at();
