. $env:CI_RUNNER_ROOT$env:env-variables.ps1
az login --tenant $env:AZURE_TENANT_ID --service-principal -u $env:AZURE_CLIENT_ID -p $env:AZURE_CLIENT_SECRET -o none
az account set --subscription $env:AZURE_SUB_ID

#Initialize the psd1 files for tokens
"@{" | out-file -filepath tokens.psd1 -width 80
"@{" | out-file -filepath cm.tokens.psd1 -width 80
"@{" | out-file -filepath cd.tokens.psd1 -width 80

# set and store environment variables into artifacts
$env:sitecoreCLI_Id = (az keyvault secret show --name "sitecoreCLI-Id" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sitecoreCLI_Id = '$env:sitecoreCLI_Id'" | out-file -filepath tokens.psd1 -append -width 80

$env:sitecoreCLI_ClientSecret = (az keyvault secret show --name "sitecoreCLI-ClientSecret" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sitecoreCLI_ClientSecret = '$env:sitecoreCLI_ClientSecret'" | out-file -filepath tokens.psd1 -append -width 80

$env:JSSEditingSecret = (az keyvault secret show --name "JSSEditingSecret" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  JssEditingSecret = '$env:JSSEditingSecret'" | out-file -filepath tokens.psd1 -append -width 80

$env:sitecoreCertificatePSW = (az keyvault secret show --name "sitecoreCertificatePSW" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sitecoreCertificatePSW = '$env:sitecoreCertificatePSW'" | out-file -filepath tokens.psd1 -append -width 80

$env:sitecoreAdminPSW = (az keyvault secret show --name "sitecoreAdminPSW" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sitecoreAdminPSW = '$env:sitecoreAdminPSW'" | out-file -filepath tokens.psd1 -append -width 80

$env:sitecoreSearchStax_API_Key = (az keyvault secret show --name "sitecoreSearchStax-API-Key" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sitecoreSearchStax_API_Key = '$env:sitecoreSearchStax_API_Key'" | out-file -filepath tokens.psd1 -append -width 80

$env:sitecoreSolr_ConnectionString = (az keyvault secret show --name "SitecoreSolr-ConnectionString" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sitecoreSolr_ConnectionString = '$env:sitecoreSolr_ConnectionString'" | out-file -filepath tokens.psd1 -append -width 80

$env:sitecoreSolr_PSW = (az keyvault secret show --name "sitecoreSolr-PSW" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sitecoreSolr_PWS = '$env:sitecoreSolr_PSW'" | out-file -filepath tokens.psd1 -append -width 80

$env:sqlAdminPSW = (az keyvault secret show --name "sqlAdminPSW" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  sqlAdminPSW = '$env:sqlAdminPSW'" | out-file -filepath tokens.psd1 -append -width 80

$env:resourceGroup = (az keyvault secret show --name "resourceGroup" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  resourceGroup = '$env:resourceGroup'" | out-file -filepath tokens.psd1 -append -width 80

$env:cdName = (az keyvault secret show --name "cdName" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  cdName = '$env:cdName'" | out-file -filepath cd.tokens.psd1 -append -width 80

$env:cmName = (az keyvault secret show --name "cmName" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  cmName = '$env:cmName'" | out-file -filepath cm.tokens.psd1 -append -width 80

$env:cmCompassionHostname = (az keyvault secret show --name "cmCompassionHostname" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  CompassionHostname = '$env:cmCompassionHostname'" | out-file -filepath cm.tokens.psd1 -append -width 80

$env:cmCompassionTargetHostname = (az keyvault secret show --name "cmCompassionTargetHostname" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  CompassionTargetHostname = '$env:cmCompassionTargetHostname'" | out-file -filepath cm.tokens.psd1 -append -width 80

$env:cdCompassionHostname = (az keyvault secret show --name "cdCompassionHostname" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  CompassionHostname = '$env:cdCompassionHostname'" | out-file -filepath cd.tokens.psd1 -append -width 80

$env:cdCompassionTargetHostname = (az keyvault secret show --name "cdCompassionTargetHostname" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  CompassionTargetHostname = '$env:cdCompassionTargetHostname'" | out-file -filepath cd.tokens.psd1 -append -width 80

$env:CompassionWebHookUrl = (az keyvault secret show --name "CompassionWebHookUrl" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  Compassion_WebHook_Url = '$env:CompassionWebHookUrl'" | out-file -filepath tokens.psd1 -append -width 120

$env:CD_Publish_Settings = (az keyvault secret show --name "CD-Publish-Settings" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  CD_Publish_Settings = '$env:CD_Publish_Settings'" | out-file -filepath cd.tokens.psd1 -append -width 400

$env:CM_Publish_Settings = (az keyvault secret show --name "CM-Publish-Settings" --vault-name "$env:AZURE_KEYVAULT" --query value -o tsv)
"  CM_Publish_Settings = '$env:CM_Publish_Settings'" | out-file -filepath cm.tokens.psd1 -append -width 400

"  si_url = '$env:si_url'" | out-file -filepath tokens.psd1 -append -width 120
"  cm_url = '$env:cm_url'" | out-file -filepath tokens.psd1 -append -width 120
"  cd_url = '$env:cd_url'" | out-file -filepath tokens.psd1 -append -width 120
"  testValue = 'cd'" | out-file -filepath cd.tokens.psd1 -append -width 80
"  testValue = 'cm'" | out-file -filepath cm.tokens.psd1 -append -width 80

# finalize the psd1 tokens file
"}" | out-file -filepath tokens.psd1 -append -width 80
"}" | out-file -filepath cd.tokens.psd1 -append -width 80
"}" | out-file -filepath cm.tokens.psd1 -append -width 80



