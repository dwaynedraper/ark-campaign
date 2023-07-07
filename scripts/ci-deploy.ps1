# Include function for token replacement
. .\scripts\Merge-Tokens.ps1

#Install the Sitecore CLI
Write-Output "Install Sitcore CLI and Serialize"
Push-Location # push current working directory to stack
Write-Output "Changing Directory to $env:CI_PROJECT_DIR"
Write-Output "Sitecore Identity Url: $env:si_url"
Write-Output "Sitecore CM Url: $env:cm_url"
Set-Location $env:CI_PROJECT_DIR

dotnet new tool-manifest --force
dotnet tool install Sitecore.CLI --version 5.1.25
dotnet sitecore init
dotnet sitecore login --authority $env:si_url --cm $env:cm_url --allow-write true --client-credentials true --client-id $env:sitecoreCLI_Id --client-secret $env:sitecoreCLI_ClientSecret
#dotnet sitecore ser push
dotnet sitecore ser validate --fix
dotnet sitecore ser pkg create -i Compassion InitItems -o compassionItems 
dotnet sitecore ser pkg install -f $env:CI_PROJECT_DIR\compassionItems.itempackage

Pop-Location # restore working directory

#sitecore cli publish
Write-Output "Use Sitecore CLI to Publish"
Push-Location # push current working directory to stack
Set-Location $env:CI_PROJECT_DIR

dotnet sitecore login --authority $env:si_url --cm $env:cm_url --allow-write true --client-credentials true --client-id $env:sitecoreCLI_Id --client-secret $env:sitecoreCLI_ClientSecret
dotnet sitecore publish

Pop-Location # restore working directory
