Name: Multiple Parameter Comparison (multi-param) - Non-Strict
Problem:

I want to compare an unknown number/combination of parameters with a data object and return true if all 1) parameter keys exist in the data object && 2) data[key] values include parameter substring.

Solution:

```ruby
def compare(params)
  comparison = []
  data = {
    stage: "1st",
    status: "complete",
    trainer: "steve"
  }
  params.each do |key, val|
      if data.has_key?(key) && data[key].include?(val)
        comparison << true
      else
        comparison << false
      end
  end
  comparison.all? ? true : false
end

params = {
  stage: "1st",
  status: "complete",
  trainer: "e"
}

compare(params)
```