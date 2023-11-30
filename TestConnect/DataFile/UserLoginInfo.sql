USE [HealthCareDB]
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'48c3148b-d784-4c9c-b26e-273d41bcac0c', N'NV_Hung', N'123456', N'NV', N'Open')
GO
INSERT [dbo].[User_Login] ([Id], [UserName], [Password], [Type], [Status]) VALUES (N'696a6352-6def-434d-b7a3-6579c6a8cb57', N'hung', N'123456', N'KH', N'Open')
GO
INSERT [dbo].[Khach_Hang] ([Id_Khach], [Full_Name], [Birhday], [Gender], [Adress], [User_Login_id]) VALUES (N'ba66e6fb-1e76-43aa-b860-8ac5422f0dd8', N'Hung Do', CAST(N'2002-06-13T00:00:00.0000000' AS DateTime2), N'Male', N'123 Nguyễn Văn Cừ', N'696a6352-6def-434d-b7a3-6579c6a8cb57')
GO
INSERT [dbo].[Nhan_Vien] ([Id_NhanVien], [Full_Name], [Birhday], [Gender], [Adress], [NhanVien_Login_id]) VALUES (N'bf563533-a022-4eb7-b4d9-1d590b182fab', N'Hung Nguyễn', CAST(N'2002-05-16T00:00:00.0000000' AS DateTime2), N'Male', N'456 Ngô Gia Tự', N'48c3148b-d784-4c9c-b26e-273d41bcac0c')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231122090253_Test', N'7.0.12')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231122092742_Test', N'7.0.12')
GO
