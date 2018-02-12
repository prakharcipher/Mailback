function localtunnel {
  lt -s piejwnjnnw --port 8001
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
