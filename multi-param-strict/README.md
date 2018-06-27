**Name**: Multiple Parameter Comparison (multi-param-strict) - Strict

**Problem**:

I want to compare an unknown number/combination of parameters with a data object and return true if:

1) parameter keys exist in the data object
2) parameter keys found in data object include parameter value substring OR == the value if a strict_key is not nil

**Solution**:

```ruby
def compare(params)
  strict_key=nil #define a strict key or leave nil
  comparisons = []
  data = {
    stage: "1st",
    status: "complete",
    trainer: "steve"
  }
  params.each do |key, val|
  
  
  
      strict_key != nil && key == strict_key ?
        # is strict_key not nil and does the current iteration key equal the strict_key?
        data.has_key?(key) && data[key] == val ?
        comparisons << true : comparisons << false :
        # if not, does the parameter key exist in the data object?
        # and does the matching data key value string include the parameter value substring?
        data.has_key?(key) ? data[key].include?(val) ? 
        comparisons << true : comparisons << false : nil
  end
  comparisons.all? ? true : false # if all comparisons are true, return true else false
end

params = {
  stage: "1st",
  status: "complete",
  trainer: "st"
}

compare(params)
```