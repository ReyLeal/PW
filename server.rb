require 'sinatra'
get '/' do
  File.read(File.join('public', 'patientwatch.html'))
end
