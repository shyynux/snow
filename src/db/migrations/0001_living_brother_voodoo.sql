CREATE TABLE IF NOT EXISTS "post" (
	"id" serial NOT NULL,
	"name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
