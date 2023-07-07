function Merge-Tokens($template, $tokens)
{
    return [regex]::Replace(
        $template,
        '__(?<tokenName>\w+)__',
        {
            param($match)

            $tokenName = $match.Groups['tokenName'].Value

            return $tokens[$tokenName]
        })
}
