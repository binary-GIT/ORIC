// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Login> dataoric { get; set; }
        public DbSet<ric_form_1> ric_form_1 { get; set; }
        public DbSet<ric_form_2> ric_form_2 { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ric_form_1>(entity =>
            {
                base.OnModelCreating(modelBuilder);
                entity.ToTable("ric_form_1"); // Match the table name
                entity.HasKey(e => e.ric_form_1_id); // Match the primary key column name
                entity.Property(e => e.ric_form_1_id).HasColumnName("ric_form_1_id");
                entity.Property(e => e.dataoric_id).HasColumnName("dataoric_id");
                entity.Property(e => e.faculty_name).HasColumnName("faculty_name");
                entity.Property(e => e.department_name).HasColumnName("department_name");
                entity.Property(e => e.faculty_email).HasColumnName("faculty_email");
                // Add the rest of the properties in a similar manner...
            });

            { 
            modelBuilder.Entity<ric_form_2>(entity =>
            {
                entity.HasKey(e => e.ric_form_2_id); // Define ric_form_2_id as the primary key
            });
        }
    }
    }
}