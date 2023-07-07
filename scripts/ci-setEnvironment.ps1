#Set the environment variable to match branch
if ($env:CI_COMMIT_BRANCH -eq 'main') {
    $env:env = 'prod'
} elseif ($env:CI_COMMIT_BRANCH -eq 'staging') {
    $env:env = 'stage'
} else {
    $env:env = 'dev'
}

Write-Output "$env:env -- $env:CI_COMMIT_BRANCH"

