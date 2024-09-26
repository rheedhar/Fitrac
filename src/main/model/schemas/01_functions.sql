/**
 * Function to update the updated_at column automatically
 */

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$ 
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;

$$ LANGUAGE plpgsql;
