output_dir=".."

rm -f ${output_dir}/*.wav

while read file line; do
  say -o ${output_dir}/${file}.aac "O. ${line} .O."
done <messages.list

for aac_file in ../*.aac; do
  name=$(basename $aac_file)
  name=${name%%.aac}

  mplayer -vo null -vc null -ao pcm:fast:file=${name}_wrong_encoding.wav ${aac_file}
  sox ${name}_wrong_encoding.wav -e mu-law -r 8000 -c 1 ${output_dir}/${name}.wav
  rm -f ${output_dir}/${name}.aac ${name}_wrong_encoding.wav
done
