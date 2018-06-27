def compare(params)
  strict_key=nil
  comparisons = []
  data = {
    stage: "1st",
    status: "complete",
    trainer: "steve"
  }
  params.each do |key, val|
      strict_key != nil && key == strict_key ?
        data.has_key?(key) && data[key] == val ?
        comparisons << true : comparisons << false :
        data.has_key?(key) && data[key].include?(val) ? 
        comparisons << true : comparisons << false
  end
  comparisons.all? ? true : false
end

params = {
  stage: "1st",
  status: "complete",
  trainer: "st"
}

compare(params)



