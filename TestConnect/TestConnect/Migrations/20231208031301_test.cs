using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace _20HTTT_1.Migrations
{
    /// <inheritdoc />
    public partial class test : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Chinh_Sach",
                columns: table => new
                {
                    Id_ChinhSach = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MinimumAge = table.Column<int>(type: "int", nullable: false),
                    MaximumAge = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MonthlyPay = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chinh_Sach", x => x.Id_ChinhSach);
                });

            migrationBuilder.CreateTable(
                name: "User_Login",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User_Login", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Khach_Hang",
                columns: table => new
                {
                    Id_Khach = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Full_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Birhday = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    User_Login_id = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Khach_Hang", x => x.Id_Khach);
                    table.ForeignKey(
                        name: "FK_Khach_Hang_User_Login_User_Login_id",
                        column: x => x.User_Login_id,
                        principalTable: "User_Login",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Nhan_Vien",
                columns: table => new
                {
                    Id_NhanVien = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Full_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Birhday = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NhanVien_Login_id = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nhan_Vien", x => x.Id_NhanVien);
                    table.ForeignKey(
                        name: "FK_Nhan_Vien_User_Login_NhanVien_Login_id",
                        column: x => x.NhanVien_Login_id,
                        principalTable: "User_Login",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Khach_Hang_Chinh_Sach",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BuyDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Id_Khach = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Id_ChinhSach = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Khach_Hang_Chinh_Sach", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Khach_Hang_Chinh_Sach_Chinh_Sach_Id_ChinhSach",
                        column: x => x.Id_ChinhSach,
                        principalTable: "Chinh_Sach",
                        principalColumn: "Id_ChinhSach",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Khach_Hang_Chinh_Sach_Khach_Hang_Id_Khach",
                        column: x => x.Id_Khach,
                        principalTable: "Khach_Hang",
                        principalColumn: "Id_Khach",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Khach_Hang_User_Login_id",
                table: "Khach_Hang",
                column: "User_Login_id");

            migrationBuilder.CreateIndex(
                name: "IX_Khach_Hang_Chinh_Sach_Id_ChinhSach",
                table: "Khach_Hang_Chinh_Sach",
                column: "Id_ChinhSach");

            migrationBuilder.CreateIndex(
                name: "IX_Khach_Hang_Chinh_Sach_Id_Khach",
                table: "Khach_Hang_Chinh_Sach",
                column: "Id_Khach");

            migrationBuilder.CreateIndex(
                name: "IX_Nhan_Vien_NhanVien_Login_id",
                table: "Nhan_Vien",
                column: "NhanVien_Login_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Khach_Hang_Chinh_Sach");

            migrationBuilder.DropTable(
                name: "Nhan_Vien");

            migrationBuilder.DropTable(
                name: "Chinh_Sach");

            migrationBuilder.DropTable(
                name: "Khach_Hang");

            migrationBuilder.DropTable(
                name: "User_Login");
        }
    }
}
