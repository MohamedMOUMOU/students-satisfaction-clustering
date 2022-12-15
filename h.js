version: 2
updates:
  - package-ecosystem: pip
    directory: /server
    schedule:
      interval: daily
      
dependabot:
  schedule:
    when: manual
    except:
      - schedules
    image: alpine:3.12
    script:
      - apk add --no-cache bash curl jq
      - ./schedule.sh
    artifacts:
      when: always
      paths:
        - ./*.txt
