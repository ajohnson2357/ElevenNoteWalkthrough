namespace ElevenNote.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _603 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Note", "OwnerId", c => c.Guid(nullable: false));
            DropColumn("dbo.Note", "guid");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Note", "guid", c => c.Guid(nullable: false));
            DropColumn("dbo.Note", "OwnerId");
        }
    }
}
