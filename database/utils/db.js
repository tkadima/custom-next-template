import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open a database connection
export async function openDB() {
  return open({
    filename: './database/database.db',
    driver: sqlite3.Database,
  });
}
