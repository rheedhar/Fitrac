/**
 * Create workout type metrics schema
 */

CREATE TABLE workout_types_metrics (
    metric_id SERIAL PRIMARY KEY,
    type_id INTEGER REFERENCES workout_types(type_id),
    metric_name VARCHAR(100) NOT NULL,
    metric_unit VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ
);

CREATE TRIGGER update_workout_types_metrics_updated_at
BEFORE UPDATE ON workout_types_metrics
FOR EACH ROW EXECUTE FUNCTION update_updated_at();
