#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["blogAPI.csproj", ""]
RUN dotnet restore "./blogAPI.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "blogAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "blogAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

COPY ca-certificate.crt /usr/local/share/ca-certificates/myCertificate.crt
RUN update-ca-certificates

ENTRYPOINT ["dotnet", "blogAPI.dll"]