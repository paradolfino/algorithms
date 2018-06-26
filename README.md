**Name**: Multiple Parameter Comparison (multi-param) - Non-Strict  

**Problem**:

I want to compare an unknown number/combination of parameters with a data object and return true if all 1) parameter keys exist in the data object && 2) data[key] values include parameter substring.

**Solution**:

```ruby
def compare(params)
  comparisons = [] #an array containing the result of each comparison
  data = {
    stage: "1st",
    status: "complete",
    trainer: "steve"
  }
  params.each do |key, val|
  # does the parameter key exist in the data object 
  # and does the matching data key value string include the parameter value substring
      if data.has_key?(key) && data[key].include?(val)
        comparisons << true
      else
        comparisons << false
      end
  end
  comparisons.all? ? true : false #if all comparisons are true, return true
end

#parameters hash, coming from an HTTP request, for example
params = {
  stage: "1st",
  status: "complete",
  trainer: "e"
}

compare(params) 
#=> will return true because the data contains all existing parameter keys,
# and the values of those keys include the matching parameter value substrings
```