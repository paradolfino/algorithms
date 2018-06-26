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