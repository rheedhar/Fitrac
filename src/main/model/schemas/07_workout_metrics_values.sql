/**
 * Create workout type metrics value schema
 */

CREATE TABLE workout_metrics_values (
    value_id SERIAL PRIMARY KEY,
    metric_id INTEGER REFERENCES workout_types_metrics(metric_id),
    workout_id INTEGER REFERENCES workouts(workout_id),
    value NUMERIC(5,2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TRIGGER update_workout_types_metrics_values_updated_at
BEFORE UPDATE ON workout_metrics_values
FOR EACH ROW EXECUTE FUNCTION update_updated_at();
